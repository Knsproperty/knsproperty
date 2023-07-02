import React from "react";
import Skeleton from "@/blocks/atoms/skeletons";
import Container from "@/blocks/atoms/container";
export default function Loading() {
    return (
        <Container>
            <div>
                <Skeleton />
            </div>
        </Container>

    );
}
