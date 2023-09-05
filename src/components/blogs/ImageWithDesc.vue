<template>
    <div class="mr-auto">
        <div class="image-item">
            <img class="aspect-w-1 aspect-[4/3] px-3 mb-2" :src="image" />
        </div>
    </div>
    <div class="title-blog mb-1">{{ titleBlog }}</div>
</template>
    
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        image: {
            type: String,
            required: true,
        },
        titleBlog: {
            type: String,
            required: true,
        },
    },
});
</script>

<style scoped>
.title-blog {
    border-radius: 0 10px 10px 10px;
    padding: 0px 16px 12px 16px;
    color: #000;
    font-family: 'Saira', SansSerif, serif;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>
