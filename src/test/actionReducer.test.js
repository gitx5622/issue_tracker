import {cleanup} from '@testing-library/react';
import issueReducer from "../store/issues/reducers/issueReducer";
import * as IssueReducer from "../store/issues/reducers/issueReducer";
import * as ISSUEACTIONS from "../store/issues/actions/issueActions";
import * as LabelReducer from "../store/labels/reducers/labelReducer";
import * as LABELACTIONS from "../store/labels/actions/labelActions";
import labelReducer from "../store/labels/reducers/labelReducer";

afterEach(cleanup);

describe('Issue Reducer', () => {

    it('Should return issue default state', () => {
        const newState = issueReducer(IssueReducer.initState,
            {"advancedrepoIssues": [], "assignedIssues": [], "createdIssues": [],
                "eshoprepoIssues": [], "isLoading": false, "issueError": null, "issues": [],
                "likeerepoIssues": [], "mentionedIssues": [], "repos": {}, "topratedrepoIssues": []}
        );
        expect(newState).toEqual({"advancedrepoIssues": [], "assignedIssues": [],
            "createdIssues": [], "eshoprepoIssues": [], "isLoading": false, "issueError": null,
            "issues": [], "likeerepoIssues": [], "mentionedIssues": [], "repos": {},
            "topratedrepoIssues": []}
        );
    });

    it('Should return new state if receiving type', () => {

        const issues = [];
        const newState = issueReducer(IssueReducer.initState.issues, {
            type: ISSUEACTIONS.getAllIssues(),
            payload: issues
        });
        expect(newState).toEqual(issues);

    });
});

describe('Label Reducer', () => {

    it('Should return label initial state', () => {
        const newState = labelReducer(LabelReducer.initState,
            {
                "topratedrepoLabels": [], "likeerepoLabels": [], "eshoprepoLabels": [], "advancedrepoLabels": [],
                "isLoading": false, "labelError": null }
        );
        expect(newState).toEqual({
            "topratedrepoLabels": [], "likeerepoLabels": [], "eshoprepoLabels": [], "advancedrepoLabels": [],
            "isLoading": false, "labelError": null }
        );
    });

    it('Should return new state if receiving type', () => {

        const topratedrepoLabels = [];
        const newState = labelReducer(LabelReducer.initState.topratedrepoLabels, {
            type: LABELACTIONS.getTopratedRepoLabels(),
            payload: topratedrepoLabels
        });
        expect(newState).toEqual(topratedrepoLabels);

    });
});