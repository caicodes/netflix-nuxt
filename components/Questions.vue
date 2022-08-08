<template>
    <section class="bg-base-100">
        <div class="questions py-16">
            <div class="flex flex-col max-w-screen-lg mx-auto px-8 py-16">
                <ContentList path="/questions" v-slot="{ list }">
                    <div v-for="article in list" :key="article._path" tabindex="0"
                        class="collapse collapse-plus  border-base-300 border-b ">
                        <div class="collapse-title text-2xl font-medium text-primary ">{{ article.title }}</div>
                        <div class="collapse-content ">
                            <ContentRenderer :value="article" class="prose prose-lg p-4" />
                        </div>
                    </div>
                </ContentList>
            </div>
        </div>
    </section>
</template>

<style>
.questions {
    background: rgba(0, 0, 0, .3);
}
</style>