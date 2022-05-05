<template>
  <div>
    <div class="container mx-auto lg:px-20 px-10 py-5">
      <div class="flex items-center justify-between mb-10">
        <div class="flex items-center gap-3">
          <div>
            <img src="@/assets/img/3.png" class="w-10" alt="" />
          </div>
          
          <h3 class="textfont font-medium text-3xl globalfont">
            Birdle
          </h3>
        </div>
        <div class="flex items-center gap-4">
          <button
            class="bg-green-700 px-3 py-1 text-white rounded-full font-medium text-sm"
            @click="getPubDataAndPopulate"
          >
            Create New Publication
          </button>
         </div>
     </div>
     <h2 class="globalfont font-semibold text-5xl px-5">New Publication</h2>
     <hr class="my-2">

     <div class=" px-20 py-12">
     	
     	<div class="flex items-center justify-center gap-20">
	     	<label>Name :</label>
	     	<div class="flex flex-col">
		<input type="text" name="" class="w-[660px] h-10 px-3 border-b-2 border-gray-600" placeholder="Publication Name">
		<p class="px-3">Link to <span class="text-black  font-bold">medium-lac.vercel.app/YOUR_PUBLICATION_NAME</span></p>	     		
	     	</div>

     	</div>



     </div>


 </div>
</div>

</template>