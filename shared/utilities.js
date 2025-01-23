export const getAge = (dateString) => {
    const date = new Date(dateString);
    let today = new Date();
    let age = today.getFullYear() - date.getFullYear();
    let m = today.getMonth() - date.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
        age--;
    }

    return age;
}