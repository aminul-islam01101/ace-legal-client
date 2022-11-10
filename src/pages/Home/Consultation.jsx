import React from 'react';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import Conversation from '../../assets/conversation.json';

const Consultation = () => (
    <div className="mb-20">
        <h2 className="text-5xl text-center mt-20 mb-10">Consultation</h2>
        <div className="flex flex-col-reverse md:flex-row justify-between ">
            <div className="bg-slate-200 p-10 md:w-70 rounded space-y-5">
                <h3 className="text-3xl">Pioneers in Legal Advisory</h3>
                <p className="text-black/50">
                    First in SubContinent to have automatic cause list systems, automation of case
                    records and court syncing, first to have a system for notice to case-law
                    similarity match for analysis and prediction assistance - and much more..
                </p>
                <p className="text-black/50">
                    undertake advisory to help you build a robust, secure system that will help you
                    meet your organizations unique requirements. Weather you use our products / APIs
                    or not, we are happy to consult and advice on how to keep your systems.
                </p>
                <Link className="block" to="/signin">
                    <button type="button" className="button">
                        Lets Talk
                    </button>
                </Link>
            </div>
            <div>
                <Lottie animationData={Conversation} loop />
            </div>
        </div>
    </div>
);

export default Consultation;
