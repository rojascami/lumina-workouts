import Link from "next/link";

import { features } from "@/lib/utils";
import Feature from "./Feature";

export default function About() {

    return (
        <div className="features" id="about">
            {features.map((feature) => (
                <Feature
                    title={feature.title}
                    body={feature.body}
                />
            ))}
            <div className="btn-wrapper">
                <Link href="/register">
                    <button className="btn">Join us</button>
                </Link>

            </div>
        </div>
    )
}