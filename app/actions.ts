'use server';

const HS_PORTAL_ID = '51045220';
const HS_FORM_GUID = '4b17afe1-c4b0-47ac-b163-f69086136280';

export async function submitContact(formData: FormData) {
  const name    = (formData.get('name')    as string)?.trim();
  const email   = (formData.get('email')   as string)?.trim();
  const subject = (formData.get('subject') as string)?.trim();
  const message = (formData.get('message') as string)?.trim();

  if (!name || !email || !subject || !message) {
    return { success: false };
  }

  try {
    const res = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HS_PORTAL_ID}/${HS_FORM_GUID}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: [
            { name: 'firstname', value: name    },
            { name: 'email',     value: email   },
            { name: 'subject',   value: subject },
            { name: 'message',   value: message },
          ],
          context: {
            pageUri:  'https://ad.tec.br',
            pageName: 'AD TEC — Contato',
          },
        }),
      }
    );

    if (!res.ok) {
      const body = await res.text();
      console.error('[HubSpot]', res.status, body);
    }
    return { success: res.ok };
  } catch (err) {
    console.error('[HubSpot] fetch error', err);
    return { success: false };
  }
}
