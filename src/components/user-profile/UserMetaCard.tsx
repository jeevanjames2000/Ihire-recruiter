"use client";
import React from "react";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";
import Image from "next/image";

export default function UserMetaCard() {
  const { isOpen, openModal, closeModal } = useModal();
  const handleSave = () => {
    console.log("Saving changes...");
    closeModal();
  };
  return (
    <>
      <div className="p-6 border border-slate-200/50 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-xl lg:p-8">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
            <div className="relative w-20 h-20 overflow-hidden border-2 border-slate-200/50 rounded-full dark:border-slate-800/50 ring-2 ring-transparent group-hover:ring-[#48adb9]/20">
              <Image
                width={80}
                height={80}
                src="/images/user/owner.jpg"
                alt="user"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#48adb9]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </div>
            <div className="order-3 xl:order-2 text-center xl:text-left">
              <h4 className="mb-2 text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white/90 dark:to-white/70 bg-clip-text text-transparent xl:text-2xl">
                Musharof Chowdhury
              </h4>
              <div className="flex flex-col items-center gap-2 text-center xl:flex-row xl:gap-4 xl:items-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#48adb9]/10 to-[#3a929d]/10 text-sm font-medium text-[#48adb9] rounded-full border border-[#48adb9]/20">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                  Team Manager
                </div>
                <div className="hidden h-4 w-px bg-slate-300/50 dark:bg-slate-700/50 xl:block"></div>
                <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Arizona, United States
                </p>
              </div>
            </div>
            <div className="flex items-center order-2 gap-3 grow xl:order-3 xl:justify-end">
              <a        
                target="_blank"
                rel="noreferrer" 
                href='https://www.facebook.com/PimjoHQ' 
                className="group flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-[#1877F2]/10 dark:hover:bg-[#1877F2]/20"
              >
                <svg
                  className="fill-current text-[#1877F2] w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6666 11.2503H13.7499L14.5833 7.91699H11.6666V6.25033C11.6666 5.39251 11.6666 4.58366 13.3333 4.58366H14.5833V1.78374C14.3118 1.7477 13.2858 1.66699 12.2023 1.66699C9.94025 1.66699 8.33325 3.04771 8.33325 5.58342V7.91699H5.83325V11.2503H8.33325V18.3337H11.6666V11.2503Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a 
                href='https://x.com/PimjoHQ' 
                target="_blank"
                rel="noreferrer"  
                className="group flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-black/10 dark:hover:bg-black/20"
              >
                <svg
                  className="fill-current text-black dark:text-white w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1708 1.875H17.9274L11.9049 8.75833L18.9899 18.125H13.4424L9.09742 12.4442L4.12578 18.125H1.36745L7.80912 10.7625L1.01245 1.875H6.70078L10.6283 7.0675L15.1708 1.875ZM14.2033 16.475H15.7308L5.87078 3.43833H4.23162L14.2033 16.475Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a 
                href="https://www.linkedin.com/company/pimjo" 
                target="_blank"
                rel="noreferrer" 
                className="group flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-[#0A66C2]/10 dark:hover:bg-[#0A66C2]/20"
              >
                <svg
                  className="fill-current text-[#0A66C2] w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.78381 4.16645C5.78351 4.84504 5.37181 5.45569 4.74286 5.71045C4.11391 5.96521 3.39331 5.81321 2.92083 5.32613C2.44836 4.83904 2.31837 4.11413 2.59216 3.49323C2.86596 2.87233 3.48886 2.47942 4.16715 2.49978C5.06804 2.52682 5.78422 3.26515 5.78381 4.16645ZM5.83381 7.06645H2.50048V17.4998H5.83381V7.06645ZM11.1005 7.06645H7.78381V17.4998H11.0672V12.0248C11.0672 8.97475 15.0422 8.69142 15.0422 12.0248V17.4998H18.3338V10.8914C18.3338 5.74978 12.4505 5.94145 11.0672 8.46642L11.1005 7.06645Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a 
                href='https://instagram.com/PimjoHQ' 
                target="_blank"
                rel="noreferrer" 
                className="group flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-gradient-to-br from-[#E4405F]/10 via-[#E4405F]/5 to-[#E4405F]/10 dark:hover:from-[#E4405F]/20"
              >
                <svg
                  className="fill-current text-[#E4405F] w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8567 1.66699C11.7946 1.66854 12.2698 1.67351 12.6805 1.68573L12.8422 1.69102C13.0291 1.69766 13.2134 1.70599 13.4357 1.71641C14.3224 1.75738 14.9273 1.89766 15.4586 2.10391C16.0078 2.31572 16.4717 2.60183 16.9349 3.06503C17.3974 3.52822 17.6836 3.99349 17.8961 4.54141C18.1016 5.07197 18.2419 5.67753 18.2836 6.56433C18.2935 6.78655 18.3015 6.97088 18.3081 7.15775L18.3133 7.31949C18.3255 7.73011 18.3311 8.20543 18.3328 9.1433L18.3335 9.76463C18.3336 9.84055 18.3336 9.91888 18.3336 9.99972L18.3335 10.2348L18.333 10.8562C18.3314 11.794 18.3265 12.2694 18.3142 12.68L18.3089 12.8417C18.3023 13.0286 18.294 13.213 18.2836 13.4351C18.2426 14.322 18.1016 14.9268 17.8961 15.458C17.6842 16.0074 17.3974 16.4713 16.9349 16.9345C16.4717 17.397 16.0057 17.6831 15.4586 17.8955C14.9273 18.1011 14.3224 18.2414 13.4357 18.2831C13.2134 18.293 13.0291 18.3011 12.8422 18.3076L12.6805 18.3128C12.2698 18.3251 11.7946 18.3306 10.8567 18.3324L10.2353 18.333C10.1594 18.333 10.0811 18.333 10.0002 18.333H9.76516L9.14375 18.3325C8.20591 18.331 7.7306 18.326 7.31997 18.3137L7.15824 18.3085C6.97136 18.3018 6.78703 18.2935 6.56481 18.2831C5.67801 18.2421 5.07384 18.1011 4.5419 17.8955C3.99328 17.6838 3.5287 17.397 3.06551 16.9345C2.60231 16.4713 2.3169 16.0053 2.1044 15.458C1.89815 14.9268 1.75856 14.322 1.7169 13.4351C1.707 13.213 1.69892 13.0286 1.69238 12.8417L1.68714 12.68C1.67495 12.2694 1.66939 11.794 1.66759 10.8562L1.66748 9.1433C1.66903 8.20543 1.67399 7.73011 1.68621 7.31949L1.69151 7.15775C1.69815 6.97088 1.70648 6.78655 1.7169 6.56433C1.75786 5.67683 1.89815 5.07266 2.1044 4.54141C2.3162 3.9928 2.60231 3.52822 3.06551 3.06503C3.5287 2.60183 3.99398 2.31641 4.5419 2.10391C5.07315 1.89766 5.67731 1.75808 6.56481 1.71641C6.78703 1.70652 6.97136 1.69844 7.15824 1.6919L7.31997 1.68666C7.7306 1.67446 8.20591 1.6689 9.14375 1.6671L10.8567 1.66699ZM10.0002 5.83308C7.69781 5.83308 5.83356 7.69935 5.83356 9.99972C5.83356 12.3021 7.69984 14.1664 10.0002 14.1664C12.3027 14.1664 14.1669 12.3001 14.1669 9.99972C14.1669 7.69732 12.3006 5.83308 10.0002 5.83308ZM10.0002 7.49974C11.381 7.49974 12.5002 8.61863 12.5002 9.99972C12.5002 11.3805 11.3813 12.4997 10.0002 12.4997C8.6195 12.4997 7.50023 11.3809 7.50023 9.99972C7.50023 8.61897 8.61908 7.49974 10.0002 7.49974ZM14.3752 4.58308C13.8008 4.58308 13.3336 5.04967 13.3336 5.62403C13.3336 6.19841 13.8002 6.66572 14.3752 6.66572C14.9496 6.66572 15.4169 6.19913 15.4169 5.62403C15.4169 5.04967 14.9488 4.58236 14.3752 4.58308Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
          <button
            onClick={openModal}
            className="group flex w-full items-center justify-center gap-3 rounded-2xl border border-transparent bg-gradient-to-r from-[#48adb9] to-[#3a929d] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:from-[#3a929d] hover:to-[#2c7d84] transition-all duration-300 lg:w-auto transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg
              className="fill-current text-white w-4 h-4 transition-transform duration-300 group-hover:rotate-12"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z"
                fill="currentColor"
              />
            </svg>
            Edit Profile
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-2xl m-4">
        <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-2xl p-6 lg:p-8">
          <div className="px-2 pr-14 mb-6">
            <h4 className="mb-2 text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white/90 dark:to-white/70 bg-clip-text text-transparent">
              Edit Personal Information
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Update your details to keep your profile up-to-date.
            </p>
          </div>
          <form className="flex flex-col">
            <div className="custom-scrollbar max-h-[60vh] overflow-y-auto px-2 pb-6 space-y-8">
              <div>
                <h5 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white/90 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#48adb9]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                  </svg>
                  Social Links
                </h5>

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                  <div className="relative">
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">Facebook</Label>
                    <Input
                      type="url"
                      defaultValue="https://www.facebook.com/PimjoHQ"
                      className="pl-10 pr-4 py-3 border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:ring-2 focus:ring-[#48adb9]/20 focus:border-transparent transition-all duration-200"
                    />
                    <svg className="absolute left-3 top-9 w-4 h-4 text-[#1877F2] pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11.6666 11.2503H13.7499L14.5833 7.91699H11.6666V6.25033C11.6666 5.39251 11.6666 4.58366 13.3333 4.58366H14.5833V1.78374C14.3118 1.7477 13.2858 1.66699 12.2023 1.66699C9.94025 1.66699 8.33325 3.04771 8.33325 5.58342V7.91699H5.83325V11.2503H8.33325V18.3337H11.6666V11.2503Z" />
                    </svg>
                  </div>

                  <div className="relative">
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">X.com</Label>
                    <Input 
                      type="url" 
                      defaultValue="https://x.com/PimjoHQ" 
                      className="pl-10 pr-4 py-3 border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:ring-2 focus:ring-[#48adb9]/20 focus:border-transparent transition-all duration-200"
                    />
                    <svg className="absolute left-3 top-9 w-4 h-4 text-black dark:text-white pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M15.1708 1.875H17.9274L11.9049 8.75833L18.9899 18.125H13.4424L9.09742 12.4442L4.12578 18.125H1.36745L7.80912 10.7625L1.01245 1.875H6.70078L10.6283 7.0675L15.1708 1.875ZM14.2033 16.475H15.7308L5.87078 3.43833H4.23162L14.2033 16.475Z" />
                    </svg>
                  </div>

                  <div className="relative">
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">LinkedIn</Label>
                    <Input
                      type="url"
                      defaultValue="https://www.linkedin.com/company/pimjo"
                      className="pl-10 pr-4 py-3 border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:ring-2 focus:ring-[#48adb9]/20 focus:border-transparent transition-all duration-200"
                    />
                    <svg className="absolute left-3 top-9 w-4 h-4 text-[#0A66C2] pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5.78381 4.16645C5.78351 4.84504 5.37181 5.45569 4.74286 5.71045C4.11391 5.96521 3.39331 5.81321 2.92083 5.32613C2.44836 4.83904 2.31837 4.11413 2.59216 3.49323C2.86596 2.87233 3.48886 2.47942 4.16715 2.49978C5.06804 2.52682 5.78422 3.26515 5.78381 4.16645ZM5.83381 7.06645H2.50048V17.4998H5.83381V7.06645ZM11.1005 7.06645H7.78381V17.4998H11.0672V12.0248C11.0672 8.97475 15.0422 8.69142 15.0422 12.0248V17.4998H18.3338V10.8914C18.3338 5.74978 12.4505 5.94145 11.0672 8.46642L11.1005 7.06645Z" />
                    </svg>
                  </div>

                  <div className="relative">
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">Instagram</Label>
                    <Input
                      type="url"
                      defaultValue="https://instagram.com/PimjoHQ"
                      className="pl-10 pr-4 py-3 border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:ring-2 focus:ring-[#48adb9]/20 focus:border-transparent transition-all duration-200"
                    />
                    <svg className="absolute left-3 top-9 w-4 h-4 text-[#E4405F] pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.8567 1.66699C11.7946 1.66854 12.2698 1.67351 12.6805 1.68573L12.8422 1.69102C13.0291 1.69766 13.2134 1.70599 13.4357 1.71641C14.3224 1.75738 14.9273 1.89766 15.4586 2.10391C16.0078 2.31572 16.4717 2.60183 16.9349 3.06503C17.3974 3.52822 17.6836 3.99349 17.8961 4.54141C18.1016 5.07197 18.2419 5.67753 18.2836 6.56433C18.2935 6.78655 18.3015 6.97088 18.3081 7.15775L18.3133 7.31949C18.3255 7.73011 18.3311 8.20543 18.3328 9.1433L18.3335 9.76463C18.3336 9.84055 18.3336 9.91888 18.3336 9.99972L18.3335 10.2348L18.333 10.8562C18.3314 11.794 18.3265 12.2694 18.3142 12.68L18.3089 12.8417C18.3023 13.0286 18.294 13.213 18.2836 13.4351C18.2426 14.322 18.1016 14.9268 17.8961 15.458C17.6842 16.0074 17.3974 16.4713 16.9349 16.9345C16.4717 17.397 16.0057 17.6831 15.4586 17.8955C14.9273 18.1011 14.3224 18.2414 13.4357 18.2831C13.2134 18.293 13.0291 18.3011 12.8422 18.3076L12.6805 18.3128C12.2698 18.3251 11.7946 18.3306 10.8567 18.3324L10.2353 18.333C10.1594 18.333 10.0811 18.333 10.0002 18.333H9.76516L9.14375 18.3325C8.20591 18.331 7.7306 18.326 7.31997 18.3137L7.15824 18.3085C6.97136 18.3018 6.78703 18.2935 6.56481 18.2831C5.67801 18.2421 5.07384 18.1011 4.5419 17.8955C3.99328 17.6838 3.5287 17.397 3.06551 16.9345C2.60231 16.4713 2.3169 16.0053 2.1044 15.458C1.89815 14.9268 1.75856 14.322 1.7169 13.4351C1.707 13.213 1.69892 13.0286 1.69238 12.8417L1.68714 12.68C1.67495 12.2694 1.66939 11.794 1.66759 10.8562L1.66748 9.1433C1.66903 8.20543 1.67399 7.73011 1.68621 7.31949L1.69151 7.15775C1.69815 6.97088 1.70648 6.78655 1.7169 6.56433C1.75786 5.67683 1.89815 5.07266 2.1044 4.54141C2.3162 3.9928 2.60231 3.52822 3.06551 3.06503C3.5287 2.60183 3.99398 2.31641 4.5419 2.10391C5.07315 1.89766 5.67731 1.75808 6.56481 1.71641C6.78703 1.70652 6.97136 1.69844 7.15824 1.6919L7.31997 1.68666C7.7306 1.67446 8.20591 1.6689 9.14375 1.6671L10.8567 1.66699ZM10.0002 5.83308C7.69781 5.83308 5.83356 7.69935 5.83356 9.99972C5.83356 12.3021 7.69984 14.1664 10.0002 14.1664C12.3027 14.1664 14.1669 12.3001 14.1669 9.99972C14.1669 7.69732 12.3006 5.83308 10.0002 5.83308ZM10.0002 7.49974C11.381 7.49974 12.5002 8.61863 12.5002 9.99972C12.5002 11.3805 11.3813 12.4997 10.0002 12.4997C8.6195 12.4997 7.50023 11.3809 7.50023 9.99972C7.50023 8.61897 8.61908 7.49974 10.0002 7.49974ZM14.3752 4.58308C13.8008 4.58308 13.3336 5.04967 13.3336 5.62403C13.3336 6.19841 13.8002 6.66572 14.3752 6.66572C14.9496 6.66572 15.4169 6.19913 15.4169 5.62403C15.4169 5.04967 14.9488 4.58236 14.3752 4.58308Z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white/90 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#48adb9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Personal Information
                </h5>

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                  <div className="col-span-2 lg:col-span-1 relative">
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</Label>
                    <Input type="text" defaultValue="Musharof" className="pl-10 pr-4 py-3 border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:ring-2 focus:ring-[#48adb9]/20 focus:border-transparent transition-all duration-200" />
                    <svg className="absolute left-3 top-9 w-4 h-4 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>

                  <div className="col-span-2 lg:col-span-1 relative">
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</Label>
                    <Input type="text" defaultValue="Chowdhury" className="pl-10 pr-4 py-3 border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:ring-2 focus:ring-[#48adb9]/20 focus:border-transparent transition-all duration-200" />
                    <svg className="absolute left-3 top-9 w-4 h-4 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>

                  <div className="col-span-2 lg:col-span-1 relative">
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</Label>
                    <Input type="email" defaultValue="randomuser@pimjo.com" className="pl-10 pr-4 py-3 border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:ring-2 focus:ring-[#48adb9]/20 focus:border-transparent transition-all duration-200" />
                    <svg className="absolute left-3 top-9 w-4 h-4 text-slate-400 pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>

                  <div className="col-span-2 lg:col-span-1 relative">
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone</Label>
                    <Input type="tel" defaultValue="+09 363 398 46" className="pl-10 pr-4 py-3 border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:ring-2 focus:ring-[#48adb9]/20 focus:border-transparent transition-all duration-200" />
                    <svg className="absolute left-3 top-9 w-4 h-4 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>

                  <div className="col-span-2 relative">
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">Bio</Label>
                    <Input type="text" defaultValue="Team Manager" className="pl-10 pr-4 py-3 border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:ring-2 focus:ring-[#48adb9]/20 focus:border-transparent transition-all duration-200" />
                    <svg className="absolute left-3 top-9 w-4 h-4 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-2 pt-6 border-t border-slate-200/50 dark:border-slate-700/50 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal} className="px-6 py-2.5 border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200">
                Cancel
              </Button>
              <Button 
                size="sm" 
                className="px-6 py-2.5 bg-gradient-to-r from-[#48adb9] to-[#3a929d] hover:from-[#3a929d] hover:to-[#2c7d84] text-white shadow-lg hover:shadow-xl rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]" 
                onClick={handleSave}
              >
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}