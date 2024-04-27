<template>
    <div class="services_card">
        <a :href="lien" class="card_icon">
            <i v-if="icon" :class="icon"></i>
            <img v-if="img" :src="require(`@/assets/icon/${img}`)" alt="icon" style="width:36px;height:36px;">
        </a>
        <div class="card_content">
            <div class="card_content_header">
                {{$t(header)}}
            </div>
            <div class="card_content_body">
                {{$t(body)}}
            </div>
            <div class="card_content_footer">
                <RouterLink :to="lien">{{$t('Plus')}}</RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardServiceCmp',
    props:['icon','header','body','lien', 'img']
}
</script>
