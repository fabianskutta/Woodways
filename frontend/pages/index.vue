<template>
    <h1>Home</h1>
    <Header />
    <div class="page-content">
        <div class="events">
        </div>
        <div class="event-btn-all"><Btn1 href="/events">Alle Events</Btn1></div>
    </div>
</template>


<style lang="scss">
.events {
    display: flex;
    flex-wrap: wrap;
}

.event-btn-all {
    display: flex;
    justify-content: center;
}
</style>