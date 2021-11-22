<template>
  <div>
    <div>
      <h3>ImageKit Vuejs quick start</h3>
      <ik-image width="400" path="/image.jpg"> </ik-image>
    </div>
    <div>
      <h3>Resizing Images in Vue.js</h3>
      <ik-image path="/image.jpg" :transformation="[{ w: 450, h: 450 }]" />
    </div>
    <div>
      <h3>Quality Manipulation</h3>
      <ik-image
        path="/image.jpg"
        :transformation="[{ quality: 50 }, { width: 500 }]"
      />
    </div>
    <div>
      <h3>Overlay with Image</h3>
      <ik-image
        path="/image.jpg"
        :transformation="[
          {
            width: 500,
            height: 500,
          },
          {
            overlayImage: 'default-image.jpg',
            overlayWidth: 150,
            overlayX: 0,
            overlayImageBorder: '5_000000', // 5px border of color 000000
          },
        ]"
      />
    </div>
    <div>
      <h3>Overlay with Text</h3>
      <ik-image
        path="/image.jpg"
        :transformation="[
          {
            width: 500,
            height: 500,
          },
          {
            overlayText: 'This is an Overlay',
            overlayTextFontFamily: 'exo',
            overlayFocus: 'top',
            overlayTextFontSize: 30,
          },
        ]"
      />
    </div>
    <div>
      <h3>Blurred Image Placeholder</h3>
      <ik-image
        path="/image.jpg"
        :lqip="{ active: true, quality: 40, blur: 5 }"
        :transformation="[{ height: 500, width: 500 }]"
      />
    </div>
    <div>
      <h3>Lazy Loading</h3>

      <ik-image
        path="/image.jpg"
        :transformation="[{ height: 500, width: 500 }]"
        loading="lazy"
        height="500"
        width="500"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ImageKit from "imagekitio-vue";
Vue.use(ImageKit, {
  urlEndpoint: "https://ik.imagekit.io/zdsjjv7awt0/", // Required. Default URL-endpoint is https://ik.imagekit.io/your_imagekit_id// optional
});

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>