const services = [
  { title: "App Design" },
  { title: "App Design" },
  { title: "App Design" },
  { title: "App Design" },
  { title: "App Design" },
  { title: "App Design" },
];

function UsersIcon() {
  return (
    <svg
      width="64"
      height="52"
      viewBox="0 0 64 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Back person */}
      <circle
        cx="38"
        cy="14"
        r="10"
        stroke="#E8700A"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M18 50c0-11.046 8.954-20 20-20"
        stroke="#E8700A"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Front person */}
      <circle
        cx="26"
        cy="14"
        r="10"
        stroke="#E8700A"
        strokeWidth="3"
        fill="#1a1a1a"
      />
      <path
        d="M6 50c0-11.046 8.954-20 20-20h0c11.046 0 20 8.954 20 20"
        stroke="#E8700A"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-[#0a0a0a] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-black mb-4">Services</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
            felis ligula aliquam
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-[#1c1c1c] rounded-2xl md:px-8 px-3 md:py-10 py-5 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-6">
                <UsersIcon />
              </div>

              {/* Title */}
              <h3 className="text-[#E8700A] font-bold md:text-xl text-base mb-5">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit
                amet consectetur
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
