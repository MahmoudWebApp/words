
import { t } from "i18next";
import { ITestimonialsListCard } from "../../../../models/testimonialCard.model";
import TestimonialCard from "../../../../components/TestimonialCard";
import testimonialImage from "../../../../assets/img/home/testimonial-1.png"

const TestimonialsListCards = () => {
    const data: ITestimonialsListCard[] = [
        {
            id: "testimonial_1",
            name: `Sarah Collin`,
            subName: `joliet's Mom`,
            avatar: `${testimonialImage}`,
            description: `${t("After a day at Giraffe, I recognize that my little Angel - Joliet is more and more confident and creative. She loves to raise her voice anytime with her wonder which hardly happen before.")}`,
        },
        {
            id: "testimonial_2",
            name: `Sarah Collin`,
            subName: `joliet's Mom`,
            avatar: `${testimonialImage}`,
            description: `${t("After a day at Giraffe, I recognize that my little Angel - Joliet is more and more confident and creative. She loves to raise her voice anytime with her wonder which hardly happen before.")}`,
        },

        {
            id: "testimonial_3",
            name: `Sarah Collin`,
            subName: `joliet's Mom`,
            avatar: `${testimonialImage}`,
            description: `${t("After a day at Giraffe, I recognize that my little Angel - Joliet is more and more confident and creative. She loves to raise her voice anytime with her wonder which hardly happen before.")}`,
        },

        {
            id: "testimonial_4",
            name: `Sarah Collin`,
            subName: `joliet's Mom`,
            avatar: `${testimonialImage}`,
            description: `${t("After a day at Giraffe, I recognize that my little Angel - Joliet is more and more confident and creative. She loves to raise her voice anytime with her wonder which hardly happen before.")}`,
        },




    ]
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-3 w-full justify-items-center'>
            {data?.map(item => <TestimonialCard  key={item.id} name={item.name} subName={item.subName} avatar={item.avatar} description={item.description} id={item.id} />)}
        </div>
    )
}

export default TestimonialsListCards