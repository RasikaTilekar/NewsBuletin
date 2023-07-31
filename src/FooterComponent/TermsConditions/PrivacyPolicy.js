import React from 'react';
import { Typography, Divider, Box } from '@mui/material';

const PrivacyPolicy = () => {
    return (
        <div>
            <Box
                className="main"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: '#FBFFDC',
                    marginInline: '20px',
                    marginTop: '10px',
                    padding: '20px'
                }}
            >
                <Typography>
                    <strong>PRIVACY POLICY FOR THE WEBSITES OF THE INDIAN EXPRESS GROUP</strong>
                </Typography>
                <Divider />
                <Divider />
                <Typography style={{ marginTop: "15px", marginBottom: '15px' }}>
                    Thank you for visiting our website of The Indian Express Group. We respect your privacy and consider it an important element of our business. This policy describes the information that we collect from you when you download, access or use its website or mobile applications for delivery of information, products, offerings and content via any mobile or internet connected device or otherwise.
                </Typography>
                <Typography>
                    <strong>User consent</strong>
                </Typography>
                <Typography style={{ marginTop: "15px", marginBottom: '15px' }}>
                    By using services of the websites of The Indian Express Group (for example, when you register for an account, communicate with us, on our sites or applications or through social media), you agree and provide consent to our collection, use and sharing of your personal information as described in this policy.
                </Typography>
                <Typography>
                    <strong>Usage of our Mobile Applications</strong>
                </Typography>
                <Typography style={{ marginTop: "15px", marginBottom: '15px' }}>
                    This policy shall also apply to our mobile applications. You are urged to update to the most current version of mobile applications. If you use an older version of these apps and/or access discontinued services, we may not be responsible or liable for any damages, due to any collection, storage and processing of your personal information as per the older version of mobile application.
                </Typography>
                <Typography>
                    <strong>Personal Information Collected</strong>
                </Typography>
                <Typography style={{ marginTop: "15px", marginBottom: '15px' }}>
                    We collect personal information from you only if you provide it voluntarily. The type of personally identifiable information that may be collected by us includes and is not limited to, name, address, e-mail address and information about your interests in and use of various services. When you register using your other accounts like on Facebook, Twitter, Gmail, etc., we shall retrieve Information from such accounts to continue to interact with you and to continue providing the Services.

                    For example, you might submit your name and email address to subscribe to our newsletters or to take part in our discussion forum or to send us your feedback. You might also enter another person’s email address and name and yours when you use our ‘Mail This Story’ feature. The information you provide is not given or sold to any private organization(s) or private persons, without explicit consent. We may collect additional information at other times, including but not limited to, when you provide feedback, comments, change your content or email preferences, respond to a survey, or any communications with us.
                </Typography>
                <Typography>
                    <strong>Collection of Information by Third-Party Sites and Sponsors</strong>
                </Typography>
                <Typography style={{ marginTop: "15px", marginBottom: '15px' }}>
                    Our website(s) sometimes contain links to other websites whose privacy policies may be different to ours. Visitors should consult the other sites’ privacy notices as we have no control over information that is submitted to, or collected by, these third parties.

                    We also use a reputable third party to serve the advertisements that you see on our pages. In the course of serving advertisements, our third-party advertiser may place or recognise a unique “cookie” on your browser and may use information (not including your name, address, e-mail address) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.
                </Typography>
                <Typography>
                    <strong>Information Collected and Stored Automatically</strong>
                </Typography>
                <Typography style={{ marginTop: "15px", marginBottom: '15px' }}>
                    If you visit our website(s) just to browse, read pages or download information, but do not register for any of our services, we gather and store certain information about your visit automatically. This information cannot and does not identify you personally.
                    The kind of information that is gathered automatically include the type of browser you are using (e.g., Netscape, Internet Explorer), the type of Operating System you are using (e.g., Windows ’98 or Mac OS) and the domain name of your Internet Service Provider (e.g., America Online, Satyam Online, Mantra Online, VSNL), the date and time of your visit and the pages you visit, along with geographical information such as Country, Region or City, etc. We sometimes use this non-personally identifiable information to improve our website(s) design, content and primarily to give you a better browsing experience.
                </Typography>
                <Typography>
                    <strong>Opting out</strong>
                </Typography>
                <Typography style={{ marginTop: "15px", marginBottom: '15px' }}>
                    If a user opts out using the Ads Settings, the unique DoubleClick cookie ID on the user’s browser is overwritten with the phrase “OPT_OUT”. Because there is no longer a unique cookie ID, the opt-out cookie can’t be associated with a particular browser.
                </Typography>
                <Typography>
                    <strong>Log File Information</strong>
                </Typography>
                <Typography style={{ marginTop: "15px", marginBottom: '15px' }}>
                    We automatically collect limited information about your computer’s connection to the Internet, mobile number, including your IP address, when you visit our site, application or service. Your IP address is a number that lets computers attached to the Internet know where to send you data — such as the pages you view. We automatically receive and log information from your browser, including your IP address, your computer’s name, your operating system, browser type and version, CPU speed, and connection speed. We may also collect log information from your device, including your location, IP address, your device’s name, device’s serial number or unique identification number (e.g.. UDiD on your iOS device), your device operating system, browser type and version, CPU speed, and connection speed, etc.
                </Typography>
            </Box>
        </div>
    )
}

export default PrivacyPolicy