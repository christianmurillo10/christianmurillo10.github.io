export function getAge(dateString: string): number {
  const date = new Date(dateString);
  const today = new Date();
  let age = today.getFullYear() - date.getFullYear();
  const m = today.getMonth() - date.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
    age--;
  }

  return age;
}

export function getYearsOfExperience(startDate: string): string {
  return `${getAge(startDate)}+`;
}
