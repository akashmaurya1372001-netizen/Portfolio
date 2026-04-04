function About() {
  return (
    <section id="about" className="px-4 py-25 ">
      <div className=" bg-green-100 rounded-2xl h-* w-* min-h-85 py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center  justify-center py-2">
          {" "}
          About{" "}
        </h2>
        <p className=" md:text-2xl mt-4 text-black font-mono text-center m-7  text-xl">
          "Hi, I'm Akash. I'm currently studying B.Tech in Computer Science with
          a focus on AI at Babu Banarasi Das University. I went to Silver Grove
          School, which really taught me the value of hard work. Right now, I'm
          working as a full-stack developer, but my real passion is diving into
          AI projects and figuring out how they actually work behind the scenes.
          I just genuinely love learning new things and building cool software."
        </p>
      </div>
    </section>
  );
}

export default About;
