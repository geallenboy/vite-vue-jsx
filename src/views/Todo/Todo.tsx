import { defineComponent } from 'vue';
import { useUserStore } from '@/store/modules/user';

export default defineComponent({
  name: 'Pinia1',
  setup() {
    const userStore = useUserStore();

    console.log(userStore.getUserInfo);
    return {
      userInfo: userStore.getUserInfo,
    };
  },

  render() {
    const { userInfo } = this;
    return (
      <div>
        {userInfo.map((k) => {
          return <p>{k}</p>;
        })}
      </div>
    );
  },
});
