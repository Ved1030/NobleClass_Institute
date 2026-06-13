export const parseJsonField = (value: string | null | undefined): string[] | null => {
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch {
    return value.split(',').map(v => v.trim());
  }
};
