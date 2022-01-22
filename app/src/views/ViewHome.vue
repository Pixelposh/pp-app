<template>
  <div class="container mx-auto px-4 pt-10">
    <h1>Welcome</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
      similique laboriosam obcaecati aliquid unde. Accusamus itaque labore alias
      fugiat sit consequuntur adipisci sapiente, assumenda quas. Deleniti quam
      corporis fugiat enim perferendis mollitia provident reprehenderit
      necessitatibus veniam amet ab est beatae maxime consectetur corrupti, nam
      minus numquam excepturi iste? Impedit expedita consectetur repellendus quo
      alias! Dolorum tenetur ea assumenda placeat consequuntur itaque deserunt
      quisquam nemo repellat debitis laboriosam possimus ut ipsam facere
      repudiandae eaque illo, magnam quidem officiis, eveniet voluptate! Qui
      doloribus facilis eius, alias illo dolorem. Facere fuga dicta
      reprehenderit expedita dolores ex impedit, cupiditate in fugiat explicabo
      laudantium voluptatibus!
    </p>
    <div
      class="mt-10 grid gap-4 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
    >
      <div
        v-for="(card, index) in propCards"
        :key="index"
        class="rounded overflow-hidden shadow-lg"
      >
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            {{ card.title }}
          </div>
          <p class="text-zinc-700 text-base">
            {{ card.copy }}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span
            class="inline-block bg-zinc-200 rounded-full px-3 py-1 text-sm font-semibold text-zinc-700 mr-2 mb-2"
            >#tag1</span
          >
          <span
            class="inline-block bg-zinc-200 rounded-full px-3 py-1 text-sm font-semibold text-zinc-700 mr-2 mb-2"
            >#tag2</span
          >
          <span
            class="inline-block bg-zinc-200 rounded-full px-3 py-1 text-sm font-semibold text-zinc-700 mr-2 mb-2"
            >#tag3</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewHome',
  data() {
    return {
      propCards: [
        {
          title: 'Prop One',
          copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
        },
        {
          title: 'Prop Two',
          copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
        },
        {
          title: 'Prop Three',
          copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
        },
        {
          title: 'Prop Four',
          copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
        },
        {
          title: 'Prop Five',
          copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
        },
        {
          title: 'Prop Six',
          copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
        },
        {
          title: 'Prop Seven',
          copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
        },
      ],
    }
  },
}
</script>
