import dayjs from "dayjs"

const date = {
    format: (d, separator = '/') => dayjs(d).format(`DD${separator}MM${separator}YYYY`),
    unformat: (d) => {
		const dateParts = d.split('/');
        const unformatedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
		
		return unformatedDate
	},
}

export default date;