<template>
  <div class="bg-white filter drop-shadow sticky top-0 z-50">
    <header class="flex justify-between items-center container mx-auto h-16">
      <div class="pl-4 cursor-pointer">
        <router-link to="/">
          <img
            alt="Vue logo"
            src="../../assets/media/images/pixelposh-logo.svg"
            width="200"
            height="100%"
          />
        </router-link>
      </div>
      <nav class="pr-4">
        <!-- Logged out user menu -->
        <ul
          v-if="!user"
          class="flex my-0 items-center list-none"
        >
          <li class="mr-6 hover:text-pp-red font-bold cursor-pointer uppercase">
            <router-link to="/user/sign-in"> Sign In </router-link>
          </li>
          <li
            class="bg-pp-red hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded cursor-pointer uppercase"
          >
            <router-link to="/user/sign-up"> Sign Up </router-link>
          </li>
        </ul>
        <!-- Logged in user desktop menu -->  
        <Menu
          v-if="user"
          as="div"
          class="relative inline-block text-left"
        >
          <div>
            <MenuButton
              class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-pp-red rounded-md hover:bg-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"> {{ user.email}}
              <ChevronDownIcon
                class="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            </MenuButton>
          </div>

          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          />

          <MenuItems class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <router-link
                  to="/user/collection"
                  :class="[
                    active ? 'text-pp-red' : 'text-zinc-700',
                    'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                  ]"  
                > 
                  <CollectionIcon
                    :active="active"
                    class="w-5 h-5 mr-2 text-zinc-700"
                    aria-hidden="true"
                  />
                  Collection
                </router-link>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <router-link
                  to="/user/profile"
                  :class="[
                    active ? 'text-pp-red' : 'text-zinc-700',
                    'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                  ]"  
                > 
                  <UserIcon
                    :active="active"
                    class="w-5 h-5 mr-2 text-zinc-700"
                    aria-hidden="true"
                  />
                  Profile
                </router-link>
              </MenuItem>
            </div>
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'text-pp-red' : 'text-zinc-700',
                    'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                  ]"
                  @click="onLogoutHandler"
                >
                  <LogoutIcon
                    :active="active"
                    class="w-5 h-5 mr-2 text-zinc-700"
                    aria-hidden="true"
                  />
                  Logout
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </nav>
    </header>
  </div>
</template>

<script>
import getUser from '@/composables/getUser';
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon, LogoutIcon, UserIcon, CollectionIcon } from '@heroicons/vue/outline'
import useSignOut from '@/composables/useSignOut'
import { useRouter } from 'vue-router';

export default {
  name: 'SiteHeader',
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    ChevronDownIcon,
    LogoutIcon,
    UserIcon,
    CollectionIcon
  },
  setup() {
    const user = getUser();
    const { signUserOut } = useSignOut();
    const router = useRouter();

    const onLogoutHandler = () => {
      signUserOut();
      router.push('/');
    }

    return { user, onLogoutHandler }
  }
}
</script>
