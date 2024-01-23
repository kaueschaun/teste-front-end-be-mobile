export default function phoneFormatter(phone) {
    phone = phone.replace(/[^\d]/g, '');
    return phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
}