<template>
  <div class="app relative min-h-100vh w-100vw overscroll-none">
    <AppUnderlay />
    <AppHeader />
    <div class="flex flex-col mt-112px">
      <BaseSkill name="Concepts" :skills="[{name: 'Accessibility'},{name: 'Security'}]" />
      <BaseSkill name="Ecosystem" :skills="[
        { 
          name: 'Node.js', 
          skills: [
            { 
              name: 'NPM',
            }
          ]
        },
        { 
          name: 'HTML', 
          skills: [
            { 
              name: 'DOM',
            }
          ]
        },
      
      ]" />
    </div>
  </div>
</template>

