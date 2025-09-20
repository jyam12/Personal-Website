import React, { Fragment } from "react";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

const BASE_URL = import.meta.env.BASE_URL;

const Project = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-box p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-2xl font-bold leading-6 whitespace-nowrap text-left underline decoration-accent decoration-2 underline-offset-8 md:text-left"
                >
                  {project.name}
                </DialogTitle>
                <div className="mt-4">
                  <img
                    src={BASE_URL + project.imageUrl}
                    alt={project.name}
                    className="mb-4 w-full rounded-lg object-cover"
                  />

                  <h4 className="text-lg font-semibold text-text">
                    About the Project
                  </h4>
                  <p className="mt-1 text-sm text-slate-400">
                    {project.description}
                  </p>

                  <h4 className="mt-4 text-lg font-semibold text-text">
                    Challenges & Learnings
                  </h4>
                  <p className="mt-1 text-sm text-slate-400">
                    {project.challenges}
                  </p>

                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-text">
                      Tech Stack
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-tag px-3 py-1 text-xs font-medium text-tag-text"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-between">
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-text button"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.videoUrl && (
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-text button"
                      >
                        Video Demo
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md bg-slate-700 px-4 py-2 text-sm font-medium text-text button_close"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                  <button
                    type="button"
                    className="rounded-md px-4 py-2 text-sm font-medium text-slate-400 button_close"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default Project;
