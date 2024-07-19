import React from 'react'

const BaliResponse = () => {
  return (
    <div className="p-10">

    <div class="mt-[60px] bg-white p-6 rounded-2xl p-5 w-full h-[90%] shadow-lg flex flex-col justify-between">
      <p className='text-center font-bold'>List Response</p>

      <div class="responses grid grid-cols-2 gap-5 mt-5">
        <div class="response-item bg-gray-100 rounded-xl p-5 flex flex-col justify-between shadow-md">
          <div class="user-info flex items-center mb-2.5">
            <div class="avatar bg-red-500 w-12 h-12 rounded-full mr-2.5"></div>
            <div class="user-details flex flex-col">
              <strong class="text-lg">Dicoding1</strong>
              <small class="text-gray-500">Sunday, 09.00</small>
            </div>
          </div>
          <p class="question font-bold my-2.5">Where do i find a Cozy Caffe?</p>
          <p class="admin-response text-sm text-gray-800 my-2.5">
            Admin: Hello! You can find caffe on any legian streets
          </p>
          <div class="actions flex justify-end gap-2.5 text-xl">
            <span class="like cursor-pointer">&#128077;</span>
            <span class="share cursor-pointer">&#128257;</span>
          </div>
        </div>
        <div class="response-item bg-gray-100 rounded-xl p-5 flex flex-col justify-between shadow-md">
          <div class="user-info flex items-center mb-2.5">
            <div class="avatar bg-red-500 w-12 h-12 rounded-full mr-2.5"></div>
            <div class="user-details flex flex-col">
              <strong class="text-lg">BDT1</strong>
              <small class="text-gray-500">Monday, 13.00</small>
            </div>
          </div>
          <p class="question font-bold my-2.5">Where can i find an Adidas Store in Bali?</p>
          <p class="admin-response text-sm text-gray-800 my-2.5">
            Admin: Living World Denpasar, Jl. Gatot Subroto Tim. Level GF, Tonja, Kec. Denpasar Utara, Kota Denpasar, Bali 80235
          </p>
          <div class="actions flex justify-end gap-2.5 text-xl">
            <span class="like cursor-pointer">&#128077;</span>
            <span class="share cursor-pointer">&#128257;</span>
          </div>
        </div>
        <div class="response-item bg-gray-100 rounded-xl p-5 flex flex-col justify-between shadow-md">
          <div class="user-info flex items-center mb-2.5">
            <div class="avatar bg-red-500 w-12 h-12 rounded-full mr-2.5"></div>
            <div class="user-details flex flex-col">
              <strong class="text-lg">Vincent</strong>
              <small class="text-gray-500">Tuesday, 11.00</small>
            </div>
          </div>
          <p class="question font-bold my-2.5">What time when GWK is Closed?</p>
          <p class="admin-response text-sm text-gray-800 my-2.5">
            Admin: Hello! 5 P.M GWK is Closed
          </p>
          <div class="actions flex justify-end gap-2.5 text-xl">
            <span class="like cursor-pointer">&#128077;</span>
            <span class="share cursor-pointer">&#128257;</span>
          </div>
        </div>
        <div class="response-item bg-gray-100 rounded-xl p-5 flex flex-col justify-between shadow-md">
          <div class="user-info flex items-center mb-2.5">
            <div class="avatar bg-red-500 w-12 h-12 rounded-full mr-2.5"></div>
            <div class="user-details flex flex-col">
              <strong class="text-lg">Faisal</strong>
              <small class="text-gray-500">Friday, 13.00</small>
            </div>
          </div>
          <p class="question font-bold my-2.5">Where can i find a Warnet in Denpasar?</p>
          <p class="admin-response text-sm text-gray-800 my-2.5">
            Admin: Hello! You can find it on Google Maps. But, Heres my Warnet Recommendation for you Jl. Gatot Subroto Tim. No.35C, Kesiman Kertalangu, Kec. Denpasar Tim., Kota Denpasar, Bali 80237.
          </p>
          <div class="actions flex justify-end gap-2.5 text-xl">
            <span class="like cursor-pointer">&#128077;</span>
            <span class="share cursor-pointer">&#128257;</span>
          </div>
        </div>
      </div>

      <div class="bottom-bar text-right mt-5">
        <a href="#" class="font-bold text-gray-800">
          For More &gt;&gt;
        </a>
      </div>
    </div>
    </div>
  );
}

export default BaliResponse
