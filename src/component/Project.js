import React from "react";

const Project = () => {
  return (
    <section
      id="project"
      class="relative py-24 bg-white h-screen"
    >
      <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div class="mb-12 space-y-2 text-center">
          <h2 class="text-2xl text-cyan-900 font-bold md:text-4xl">
            Portofolio
          </h2>
          <p class="lg:w-6/12 lg:mx-auto">
            Berikut beberapa portofolio yang telah dibuat:
          </p>
        </div>

        <div class="grid gap-12 lg:grid-cols-2">
          <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
            <img
              src="https://tailus.io/sources/blocks/twocards/preview/images/woman.jpg"
              alt="art cover"
              loading="lazy"
              width="1000"
              height="667"
              class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
            />
            <div class="sm:w-7/12 pl-0 p-5">
              <div class="space-y-2">
                <div class="space-y-4">
                  <h4 class="text-2xl font-semibold text-cyan-900">
                    Provident de illo eveniet commodi fuga fugiat laboriosam
                    expedita.
                  </h4>
                  <p class="text-gray-600">
                    Laborum saepe laudantium in, voluptates ex placeat quo harum
                    aliquam totam, doloribus eum impedit atque! Temporibus...
                  </p>
                </div>
                <a href="www.tailus.io" class="block w-max text-cyan-600">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
            <img
              src="https://tailus.io/sources/blocks/twocards/preview/images/man.jpg"
              alt="art cover"
              loading="lazy"
              width="1000"
              height="667"
              class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
            />
            <div class="sm:w-7/12 pl-0 p-5">
              <div class="space-y-2">
                <div class="space-y-4">
                  <h4 class="text-2xl font-semibold text-cyan-900">
                    Provident de illo eveniet commodi fuga fugiat laboriosam
                    expedita.
                  </h4>
                  <p class="text-gray-600">
                    Laborum saepe laudantium in, voluptates ex placeat quo harum
                    aliquam totam, doloribus eum impedit atque! Temporibus...
                  </p>
                </div>
                <a href="www.tailus.io" class="block w-max text-cyan-600">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
