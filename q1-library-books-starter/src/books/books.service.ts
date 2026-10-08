import {
  ConflictException,
  Injectable,
  NotFoundException,
  NotImplementedException,
} from "@nestjs/common";
import { Book, Paginated } from "./book.entity";
import { SEED_BOOKS } from "./books.seed";
import { CreateBookDto } from "./dto/create-book.dto";
import { QueryBooksDto } from "./dto/query-books.dto";
import { UpdateBookDto } from "./dto/update-book.dto";

@Injectable()
export class BooksService {
  // In-memory "database". Each app instance gets its own copy of the seed data.
  private books: Book[] = SEED_BOOKS.map((b) => ({
    ...b,
    genres: [...b.genres],
  }));
  private nextId = this.books.length + 1;

  findAll(query: QueryBooksDto): Paginated<Book> {
    const author = query.author?.toLowerCase();
    const genre = query.genre?.toLowerCase();
    const filtered = this.books.filter((book) => {
      const matchesAuthor =
        !author || book.author.toLowerCase().includes(author);
      const matchesGenre =
        !genre || book.genres.some((item) => item.toLowerCase() === genre);
      const matchesAvailability =
        query.available === undefined || book.available === query.available;
      return matchesAuthor && matchesGenre && matchesAvailability;
    });
    const start = (query.page - 1) * query.limit;

    return {
      data: filtered.slice(start, start + query.limit),
      meta: {
        total: filtered.length,
        page: query.page,
        limit: query.limit,
        totalPages: Math.ceil(filtered.length / query.limit),
      },
    };
  }

  findOne(id: number): Book {
    const book = this.books.find((item) => item.id === id);
    if (!book) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }
    return book;
  }

  create(dto: CreateBookDto): Book {
    if (this.books.some((book) => book.isbn === dto.isbn)) {
      throw new ConflictException(
        `A book with ISBN ${dto.isbn} already exists`,
      );
    }
    const book: Book = {
      id: this.nextId++,
      title: dto.title,
      author: dto.author,
      isbn: dto.isbn,
      publishedYear: dto.publishedYear,
      genres: dto.genres ?? [],
      available: dto.available ?? true,
    };
    this.books.push(book);
    return book;
  }

  // TODO (Task 5): partially update a book.
  update(id: number, dto: UpdateBookDto): Book {
    throw new NotImplementedException();
  }

  // TODO (Task 6): delete a book.
  remove(id: number): void {
    throw new NotImplementedException();
  }
}
