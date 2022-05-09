import { defineComponent } from 'vue';
import { WelComeBanner } from './modules';

export default defineComponent({
  setup() {
    return () => (
      <div>
        <WelComeBanner />
      </div>
    );
  }
});
