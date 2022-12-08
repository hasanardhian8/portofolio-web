import React from "react";
import revamp from "../images/dasboard.jpg";
import progress from "../images/progress.jpg";

const Project = () => {
  return (
    <section id="project" class="relative py-24 bg-white h-screen">
      <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div class="mb-12 space-y-2 text-center">
          <h2 class="text-2xl text-cyan-900 font-bold md:text-4xl">Project</h2>
          <p class="lg:w-6/12 lg:mx-auto">
            Here are some projects that have been made:
          </p>
          <div class="flex justify-center mt-8 space-x-6">
            <a
              href="https://github.com/hasanardhian8"
              class="text-gray-400 hover:text-gray-500 "
            >
              <span class="sr-only">GitHub</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="grid gap-12 lg:grid-cols-2">
          <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
            <img
              src={revamp}
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
                    Revamp Web CodeID
                  </h4>
                  <p class="text-gray-600">
                    Rebuilding the CODE.ID Academy web carried out by bootcamp
                    students. Each student gets a jobdesk according to his
                    choice. So, I chose the dashboard page section and the
                    graduation record page. The results of making the web are
                    collected on the leader's github account which is then
                    presented in front of the leaders and staff of CODE.ID
                    Academy. Web development was carried out by 11 students with
                    17 jobdesk including database, backend and front end
                  </p>
                </div>
                <a
                  href="https://github.com/hasanardhian8/revampwebcodeid_reactjs"
                  class="block w-max text-cyan-600"
                >
                  Front-end
                </a>
                <a
                  href="https://github.com/hasanardhian8/revampwebcodeid_nodejs"
                  class="block w-max text-cyan-600"
                >
                  Back-end
                </a>
              </div>
            </div>
          </div>
          <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
            <img
              src={progress}
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
                    LibraryApp
                  </h4>
                  <p class="text-gray-600">Build a web library built on the MERN concept (MongoDb, ExpressJs, ReactJs, NodeJs)</p>
                </div>
                <a
                  href="https://github.com/hasanardhian8/react-libraryapp"
                  class="block w-max text-cyan-600"
                >
                  Front-end
                </a>
                <a
                  href="https://github.com/hasanardhian8/node-libraryapp"
                  class="block w-max text-cyan-600"
                >
                  Back-end
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
