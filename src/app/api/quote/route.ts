import { NextRequest, NextResponse } from 'next/server';

// E-Mail wird direkt an info@din-maler.ch gesendet über FormSubmit.co
// EINMALIG: Beim ersten Absenden kommt eine Bestätigungs-E-Mail
// Den Link darin anklicken → danach kommen alle Anfragen direkt an!

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name    = formData.get('name')        as string || '';
    const phone   = formData.get('phone')       as string || '';
    const email   = formData.get('email')       as string || '';
    const service = formData.get('serviceType') as string || '';
    const message = formData.get('message')     as string || '';

    if (!name || !phone || !email || !service || !message) {
      return NextResponse.json({ error: 'Pflichtfelder fehlen' }, { status: 400 });
    }

    const submitData = new FormData();
    submitData.append('name',      name);
    submitData.append('phone',     phone);
    submitData.append('email',     email);
    submitData.append('location',  formData.get('location') as string || '');
    submitData.append('service',   service);
    submitData.append('message',   message);
    submitData.append('date',      formData.get('desiredDate') as string || '');
    submitData.append('budget',    formData.get('budget') as string || '');
    submitData.append('_subject',  `Neue Offertanfrage von ${name} – Din Maler`);
    submitData.append('_template', 'table');
    submitData.append('_captcha',  'false');
    submitData.append('_replyto',  email);

    const response = await fetch('https://formsubmit.co/info@din-maler.ch', {
      method: 'POST',
      body: submitData,
    });

    if (!response.ok) throw new Error(`FormSubmit Fehler: ${response.status}`);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Quote form error:', error);
    return NextResponse.json({ error: 'Fehler beim Senden' }, { status: 500 });
  }
}
