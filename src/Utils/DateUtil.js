import moment from "moment";

var dateUtil = null;

const FORMAT_DATE = 'DD/MM/YYYY';
const FORMAT_DATE_TIME = 'DD/MM/YYYY hh:mm:ss';
const FORMAT_DATE_API = 'YYYY-MM-DD';

class DateUtil {
    constructor(dateObject) {
        this.dateObject = moment(dateObject);
    }

    static raw(date) {
        dateUtil = new DateUtil(date);
        return dateUtil;
    }

    toDate() {
        return this.dateObject.format(FORMAT_DATE);
    }

    toDateTime() {
        return this.dateObject.format(FORMAT_DATE_TIME);
    }

    toHumanTime() {
        return this.dateObject.format(FORMAT_DATE_TIME);
    }

    toApiFormat() {
        return this.dateObject.format(FORMAT_DATE_API);
    }
}

export default DateUtil;