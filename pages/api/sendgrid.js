import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res){
    try{
        console.log('request body',req.body)
        await sgMail.send({
            to: 'abu.sammie@gmail.com',
            from: '3310572@myuwc.ac.za',
            subject: 'Learning Send Grid',
            text: 'I hope this works...this is the text',
            html: '<strong>html strong tag...this is html</strong>'
        })
    }catch(err){
        console.log(err)
        return res.status(500)
    }
    return res.status(200)
}

export default sendEmail