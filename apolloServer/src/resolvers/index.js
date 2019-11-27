import { merge } from "lodash";
import { CompanyResolvers } from "./company";
import { UserResolvers } from "./user";
import { JobResolvers } from "./jobs";

export const resolvers = merge(CompanyResolvers, UserResolvers, JobResolvers);
