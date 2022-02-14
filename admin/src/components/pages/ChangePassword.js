import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const ChangePassword = () => {
  return (
    <div>
        <Sidebar />
        <div className="md:ml-64">
            <div className="mt-8 px-6 md:px-8 h-auto">
              <div className="w-full p-14 bg-white shadow-2xl rounded-xl mx-auto lg:w-3/4">
                  <p className="text-lg font-bold text-blue mb-4">GANTI PASSWORD</p>
                  <hr/>
                  <form>
                    <div className="grid grid-cols-12 items-center mt-8 mb-4">
                      <div className="col-start-1 col-end-6 flex justify-start xl:justify-end xl:mr-8 text-sm text-grey font-semibold">
                        <p>Password Lama</p>
                      </div>
                      <div className="col-start-6 col-span-6 sm:col-span-5">
                        <input type="text" className="px-3 py-2 bg-white text-grey text-sm border border-grey-300 focus:outline-none block w-full rounded-md" placeholder="Password Lama"/>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 items-center mb-4">
                      <div className="col-start-1 col-end-6 flex justify-start xl:justify-end xl:mr-8 text-sm text-grey font-semibold">
                        <p>Password Baru</p>
                      </div>
                      <div className="col-start-6 col-span-6 sm:col-span-5">
                        <input type="text" className="px-3 py-2 bg-white text-grey text-sm border border-grey-300 focus:outline-none block w-full rounded-md" placeholder="Password Baru"/>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 items-center mb-4">
                      <div className="col-start-1 col-end-6 flex justify-start text-sm xl:justify-end xl:mr-8 text-grey font-semibold">
                        <p>Konfirmasi Password Baru</p>
                      </div>
                      <div className="col-start-6 col-span-6 sm:col-span-5">
                        <input type="text" className="px-3 py-2 bg-white text-grey text-sm border border-grey-300 focus:outline-none block w-full rounded-md" placeholder="Konfirmasi Password Baru"/>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 items-center">
                      <div className="col-start-6 col-span-6">
                        <button className="bg-blue focus:outline-none focus:ring focus:ring-info-300 mt-6 w-36 font-normal py-2 rounded-md text-white text-sm tracking-wide"
                        >
                          SIMPAN
                        </button>
                      </div>
                    </div>
                    {/* <div className="space-y-5">
                      <div>
                        <label for="oldPassword" className="block mb-1 text-grey text-sm font-semibold">Password Lama</label>
                        <input type="text" className="mt-1 px-3 py-2 bg-white text-grey text-sm border border-slate-300 focus:outline-none block w-full rounded-md" placeholder="Password Lama"
                        />
                      </div>
                      <div>
                        <label for="newPassword" className="block mb-1 text-grey text-sm font-semibold">Password Baru</label>
                        <input type="text" className="mt-1 px-3 py-2 bg-white text-grey text-sm border border-slate-300 focus:outline-none block w-full rounded-md" placeholder="Password Baru"
                        />
                      </div>
                      <div>
                        <label for="confirmPassword" className="block mb-1 text-grey text-sm font-semibold">Konfirmasi Password Baru</label>
                        <input type="text" className="mt-1 px-3 py-2 bg-white text-grey text-sm border border-slate-300 focus:outline-none block w-full rounded-md" placeholder="Konfirmasi Password Baru"
                        />
                      </div>
                    </div>
                    <button className="bg-blue focus:outline-none focus:ring focus:ring-info-300 mt-8 w-full font-semibold py-2 rounded-md text-white text-sm tracking-wide"
                    >
                      SIMPAN
                    </button> */}
                  </form>
              </div>
            </div>
        </div>
    </div>
  );
}

export default ChangePassword;
