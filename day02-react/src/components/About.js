import myimage from "../assets/me.png";

function About() {
  return (
    <section id="about" class="text-gray-600 bg-gray-100 body-font">
      <div class="container px-5 py-24 mx-auto place-items-center justify-center flex">
        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
          <div class="h-full text-center">
            <img
              alt="Me"
              class="w-30 h-30 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
              src={myimage}>
            </img>
            <br />
            <span class="inline-block h-1 w-20 rounded bg-red-500 mt-6 mb-4"></span>
            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
              Divyanshu Patel
            </h2>
            <p class="text-gray-500">Easley, SC</p>
            <p class="text-gray-400">
              I am originally from India and I moved to United States in 2016
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
