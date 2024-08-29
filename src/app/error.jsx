"use client"

import CommonError from "@/components/errors/common-error";
import Spacer from "@/components/spacer";
import React from "react";

const ErrorPage = ({ error, reset }) => {
	return (
		<>
			<Spacer height={30}/>
			<CommonError error={error} reset={reset} />
			<Spacer height={30}/>
		</>
	);
};

export default ErrorPage;
