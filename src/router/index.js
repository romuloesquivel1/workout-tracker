import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/index';
import WorkoutIndexView from '../views/WorkoutIndexView.vue';
import RegisterView from '../views/RegisterView.vue';
import LoginView from '../views/LoginView.vue';
import CreateView from '../views/CreateView.vue';
import WorkoutDetailView from '../views/WorkoutDetailView.vue';
import LandingView from '../views/LandingView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import ProfileView from '../views/ProfileView.vue';
import EditProfileView from '../views/EditProfileView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingView,
      meta: {
        title: "Home",
        auth: false,
      },
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: {
        title: "Register",
        auth: false,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        title: "Login",
        auth: false,
      },
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView,
      meta: {
        title: "Create",
        auth: true,
      },
    },
    {
      path: "/workouts",
      name: "workouts",
      component: WorkoutIndexView,
      meta: {
        title: "Workout Index",
        auth: true,
      },
    },
    {
      path: "/workout/:workoutId",
      name: "workout",
      component: WorkoutDetailView,
      meta: {
        title: "Workout Detail",
        auth: false,
      },
    },
    {
      path: '/edit-profile',
      name: 'edit-profile',
      component: EditProfileView,
      meta: {
        title: "Edit Profile",
        auth: true, // assuming that only authenticated users can access this page
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: {
        title: "Profile",
        auth: true, // assuming that only authenticated users can access this page
      },
    },
    // not found route
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
      meta: {
        title: "Not Found",
        auth: false,
      },
    },
  ],
  linkExactActiveClass: 'text-orange-500',
});

router.beforeEach((to, from, next) => {
  // Change document titles
  document.title = `${to.meta.title} | Workout Tracker`;

  // Route guard for auth routes
  const user = store.state.currentUser;
  if (to.matched.some((res) => res.meta.auth)) {
    if (user) {
      next();
      return;
    }
    next({ name: "login" });
    return;
  }
  next();
});

export default router;
