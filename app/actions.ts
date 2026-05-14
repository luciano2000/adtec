'use server';

export async function submitContact(formData: FormData) {
  const name    = (formData.get('name')    as string)?.trim();
  const email   = (formData.get('email')   as string)?.trim();
  const subject = (formData.get('subject') as string)?.trim();
  const message = (formData.get('message') as string)?.trim();

  if (!name || !email || !subject || !message) {
    return { success: false };
  }

  return { success: true };
}
