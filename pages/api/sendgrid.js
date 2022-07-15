import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res){
    try{
        console.log('request body',req.body)
        await sgMail.send({
            to: 'abu.sammie@gmail.com',
            from: '3310572@myuwc.ac.za',
            subject: `Subject from SendGrid: ${req.body.subject}`,
            html: `<h4>You've got mail from ${req.body.fullname}, their email is ${req.body.email}</h4>
                    <h4>Message: </h4> <p>${req.body.message}</p>`
        }).then(() => {
            console.log('Email Sent')
        }).catch((err) => {
            console.error(err)
        })
    }catch(err){
        console.log(err)
        return res.status(500)
    }
    return res.status(200)
}

export default sendEmail