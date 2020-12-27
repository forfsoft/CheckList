export function GetColumnsData() {
    const defaultColumnProperties = {
        filterable: true,
        resizable: true,
        sortable: true,
        editable: true
    };

    const columns = [
        {
            key: "LargeCategory",
            name: "대분류",
            frozen: true,
            sortDescendingFirst: true
        },
        {
            key: "MediumCategory",
            name: "중분류"
        },
        {
            key: "SmallCategory",
            name: "소분류"
        },
        {
            key: "Desc",
            name: "내용"
        },
        {
            key: "Complete",
            name: "상태"
        },
        {
            key: "Owner",
            name: "담당자"
        }
    ].map(c => ({ ...c, ...defaultColumnProperties }));

    return columns;
}

export function GetRowsData() {
    var rows = [
        { LargeCategory: "밸런스", MediumCategory: "검사", SmallCategory: "스킬1", Desc: "QA 목록 1", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "검사", SmallCategory: "스킬1", Desc: "QA 목록 2", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "검사", SmallCategory: "스킬1", Desc: "QA 목록 3", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "검사", SmallCategory: "스킬1", Desc: "QA 목록 4", Owner: "goli81", Complete: "false", expand: true },

        { LargeCategory: "밸런스", MediumCategory: "검사", SmallCategory: "스킬2", Desc: "QA 목록 1", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "검사", SmallCategory: "스킬2", Desc: "QA 목록 2", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "검사", SmallCategory: "스킬2", Desc: "QA 목록 3", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "검사", SmallCategory: "스킬2", Desc: "QA 목록 4", Owner: "goli81", Complete: "false", expand: true },

        { LargeCategory: "밸런스", MediumCategory: "검사", SmallCategory: "스킬3", Desc: "QA 목록 1", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "검사", SmallCategory: "스킬3", Desc: "QA 목록 2", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "검사", SmallCategory: "스킬3", Desc: "QA 목록 3", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "검사", SmallCategory: "스킬3", Desc: "QA 목록 4", Owner: "goli81", Complete: "false", expand: true },
        
        { LargeCategory: "밸런스", MediumCategory: "검사", SmallCategory: "스킬1", Desc: "QA 목록 1", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "검사", SmallCategory: "스킬1", Desc: "QA 목록 2", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "검사", SmallCategory: "스킬1", Desc: "QA 목록 3", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "검사", SmallCategory: "스킬1", Desc: "QA 목록 4", Owner: "goli81", Complete: "false", expand: true },

        //
        { LargeCategory: "밸런스", MediumCategory: "검사", SmallCategory: "스탯1", Desc: "QA 목록 1", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "검사", SmallCategory: "스탯1", Desc: "QA 목록 2", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "검사", SmallCategory: "스탯1", Desc: "QA 목록 3", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "검사", SmallCategory: "스탯1", Desc: "QA 목록 4", Owner: "goli81", Complete: "false", expand: true },

        { LargeCategory: "밸런스", MediumCategory: "검사", SmallCategory: "스탯2", Desc: "QA 목록 1", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "검사", SmallCategory: "스탯2", Desc: "QA 목록 2", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "검사", SmallCategory: "스탯2", Desc: "QA 목록 3", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "검사", SmallCategory: "스탯2", Desc: "QA 목록 4", Owner: "goli81", Complete: "false", expand: true },


        //##################################################################################################################
        { LargeCategory: "밸런스", MediumCategory: "마법사", SmallCategory: "스킬1", Desc: "QA 목록 1", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "마법사", SmallCategory: "스킬1", Desc: "QA 목록 2", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "마법사", SmallCategory: "스킬1", Desc: "QA 목록 3", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "마법사", SmallCategory: "스킬1", Desc: "QA 목록 4", Owner: "goli81", Complete: "false", expand: true },

        { LargeCategory: "밸런스", MediumCategory: "마법사", SmallCategory: "스킬2", Desc: "QA 목록 1", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "마법사", SmallCategory: "스킬2", Desc: "QA 목록 2", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "마법사", SmallCategory: "스킬2", Desc: "QA 목록 3", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "마법사", SmallCategory: "스킬2", Desc: "QA 목록 4", Owner: "goli81", Complete: "false", expand: true },

        { LargeCategory: "밸런스", MediumCategory: "마법사", SmallCategory: "스킬3", Desc: "QA 목록 1", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "마법사", SmallCategory: "스킬3", Desc: "QA 목록 2", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "마법사", SmallCategory: "스킬3", Desc: "QA 목록 3", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "마법사", SmallCategory: "스킬3", Desc: "QA 목록 4", Owner: "goli81", Complete: "false", expand: true },
        
        { LargeCategory: "밸런스", MediumCategory: "마법사", SmallCategory: "스킬1", Desc: "QA 목록 1", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "마법사", SmallCategory: "스킬1", Desc: "QA 목록 2", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "마법사", SmallCategory: "스킬1", Desc: "QA 목록 3", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "마법사", SmallCategory: "스킬1", Desc: "QA 목록 4", Owner: "goli81", Complete: "false", expand: true },

        //
        { LargeCategory: "밸런스", MediumCategory: "마법사", SmallCategory: "스탯1", Desc: "QA 목록 1", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "마법사", SmallCategory: "스탯1", Desc: "QA 목록 2", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "마법사", SmallCategory: "스탯1", Desc: "QA 목록 3", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "마법사", SmallCategory: "스탯1", Desc: "QA 목록 4", Owner: "goli81", Complete: "false", expand: true },

        { LargeCategory: "밸런스", MediumCategory: "마법사", SmallCategory: "스탯2", Desc: "QA 목록 1", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "마법사", SmallCategory: "스탯2", Desc: "QA 목록 2", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "마법사", SmallCategory: "스탯2", Desc: "QA 목록 3", Owner: "goli81", Complete: "false", expand: true },
        { LargeCategory: "밸런스", MediumCategory: "마법사", SmallCategory: "스탯2", Desc: "QA 목록 4", Owner: "goli81", Complete: "false", expand: true },
    ];

    for (var i = 0; i < rows.length; i++) {
        rows[i].id = i;
    }

    return rows;
}
