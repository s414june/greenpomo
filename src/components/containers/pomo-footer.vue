<template>
    <footer class="pomoCookie">
        <p>
            <span>已採收：{{$parent.timesCookie%4}}/4番茄</span>
            <span>已收穫：{{Math.floor($parent.timesCookie/4)}}棵番茄樹</span>
        </p>
    </footer>
</template>

<script>
export default{
    data() {
        return{
        }
    }
}

</script>

<style>
    footer {
        position: absolute;
        bottom: 0;
        padding: 8px 8px 20px 20px;
        height: 30px;
    }
    
    footer p span {
        color: DimGray;
        font-size: calc(.9rem + .2vw);
    }
    
    footer p span:nth-child(2) {
        padding-left: 20px;
    }
</style>
