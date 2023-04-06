<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Contact Us</h1>
        <div class="card w-96 bg-base-100 shadow-xl my-20">
          <div class="card-body">
            <form action="">
              <div class="form-control w-full max-w-xs">
                <label class="label" for="email">
                  <span class="label-text">Email</span>
                </label>
                <input type="text" id="email" placeholder="Type Here" class="input input-bordered w-full max-w-xs">
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label" for="name">
                  <span class="label-text">Name</span>
                </label>
                <input type="text" id="name" placeholder="Type Here" class="input input-bordered w-full max-w-xs">
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label" for="message">
                  <span class="label-text">Message</span>
                </label>
                <textarea type="text" id="message" placeholder="Type Your Message Here" class="textarea textarea-bordered w-full max-w-xs"></textarea>
              </div>
              <div class="card-actions justify-end my-5">
                <button class="btn btn-primary">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>