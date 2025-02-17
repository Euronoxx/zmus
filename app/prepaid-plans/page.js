"use client"
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";
import PrepaidBanner from "../components/PrepaidBanner";
import PrepaidSlider from "../components/PrepaidSlider";

const PrepaidPlans = () => {
    return (
        <>
        <TopHeader />
        <Header />
        <HeadBar text="No Contract Best Prepaid Mobile Phone Deals" />
        <PrepaidBanner />
        <PrepaidSlider />
        <Footer />
        </>
    );
}
export default PrepaidPlans;