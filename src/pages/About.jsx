export function About() {
  return (
    <div className="center-content py-8">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <img
          className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg mb-6"
          src="/img/IMG_5012.jpg"
          alt="About me"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
          ABOUT ME
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          Passionate about crafting seamless web experiences, I&apos;m a web
          developer with a love for clean code and innovative design. When
          I&apos;m not building websites, you&apos;ll find me scaling new
          heights—both in coding challenges and on climbing walls. I thrive on
          problem-solving, adventure, and pushing limits in both worlds.
        </p>
      </div>
    </div>
  )
}
