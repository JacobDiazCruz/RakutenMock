import {
  required,
  requiredList,
  requiredObject,
  email,
  min,
  max
} from "@/helpers/validations"
import moment from "moment"

export default {
  data() {
    return {
      rules: {
        required,
        requiredList,
        requiredObject,
        email,
        min,
        max
      }
    }
  },

  methods: {
    /**
     * Date and time converter into string
     * @param { time } time
     */
    convertTime(time, format) {
      if (format && time) {
        return moment(String(time)).format(format);
      }
      const dateTime = new Date(time).toLocaleString();
      return dateTime.split(",")[0];
    },
  }
}