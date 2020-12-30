export function GetColumnsData() {
    var columns = [
        {
            name: 'LargeCategory',
            title: '대분류'
        },
        {
            name: 'MediumCategory',
            title: '중분류'
        },
        {
            name: 'SmallCategory',
            title: '소분류'
        },
        {
            name: 'Desc',
            title: '내용'
        },
        {
            name: 'Complete',
            title: '상태'
        },
        {
            name: 'Owner',
            title: '담당자'
        },
        {
            name: 'Action',
            title: '동작'
        }
    ];

    return columns;
}

export function GetRowsData() {
    var rows = [
        { LargeCategory: '밸런스', MediumCategory: '검사', SmallCategory: '스킬1', Desc: 'QA 목록 1', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '검사', SmallCategory: '스킬1', Desc: 'QA 목록 2', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '검사', SmallCategory: '스킬1', Desc: 'QA 목록 3', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '검사', SmallCategory: '스킬1', Desc: 'QA 목록 4', Owner: 'goli81', Complete: 'false', expand: true },

        { LargeCategory: '밸런스', MediumCategory: '검사', SmallCategory: '스킬2', Desc: 'QA 목록 1', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '검사', SmallCategory: '스킬2', Desc: 'QA 목록 2', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '검사', SmallCategory: '스킬2', Desc: 'QA 목록 3', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '검사', SmallCategory: '스킬2', Desc: 'QA 목록 4', Owner: 'goli81', Complete: 'false', expand: true },

        { LargeCategory: '밸런스', MediumCategory: '검사', SmallCategory: '스킬3', Desc: 'QA 목록 1', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '검사', SmallCategory: '스킬3', Desc: 'QA 목록 2', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '검사', SmallCategory: '스킬3', Desc: 'QA 목록 3', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '검사', SmallCategory: '스킬3', Desc: 'QA 목록 4', Owner: 'goli81', Complete: 'false', expand: true },
        
        { LargeCategory: '밸런스', MediumCategory: '검사', SmallCategory: '스킬1', Desc: 'QA 목록 1', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '검사', SmallCategory: '스킬1', Desc: 'QA 목록 2', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '검사', SmallCategory: '스킬1', Desc: 'QA 목록 3', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '검사', SmallCategory: '스킬1', Desc: 'QA 목록 4', Owner: 'goli81', Complete: 'false', expand: true },

        //
        { LargeCategory: '밸런스', MediumCategory: '검사', SmallCategory: '스탯1', Desc: 'QA 목록 1', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '검사', SmallCategory: '스탯1', Desc: 'QA 목록 2', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '검사', SmallCategory: '스탯1', Desc: 'QA 목록 3', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '검사', SmallCategory: '스탯1', Desc: 'QA 목록 4', Owner: 'goli81', Complete: 'false', expand: true },

        { LargeCategory: '밸런스', MediumCategory: '검사', SmallCategory: '스탯2', Desc: 'QA 목록 1', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '검사', SmallCategory: '스탯2', Desc: 'QA 목록 2', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '검사', SmallCategory: '스탯2', Desc: 'QA 목록 3', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '검사', SmallCategory: '스탯2', Desc: 'QA 목록 4', Owner: 'goli81', Complete: 'false', expand: true },


        //##################################################################################################################
        { LargeCategory: '밸런스', MediumCategory: '마법사', SmallCategory: '스킬1', Desc: 'QA 목록 1', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '마법사', SmallCategory: '스킬1', Desc: 'QA 목록 2', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '마법사', SmallCategory: '스킬1', Desc: 'QA 목록 3', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '마법사', SmallCategory: '스킬1', Desc: 'QA 목록 4', Owner: 'goli81', Complete: 'false', expand: true },

        { LargeCategory: '밸런스', MediumCategory: '마법사', SmallCategory: '스킬2', Desc: 'QA 목록 1', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '마법사', SmallCategory: '스킬2', Desc: 'QA 목록 2', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '마법사', SmallCategory: '스킬2', Desc: 'QA 목록 3', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '마법사', SmallCategory: '스킬2', Desc: 'QA 목록 4', Owner: 'goli81', Complete: 'false', expand: true },

        { LargeCategory: '밸런스', MediumCategory: '마법사', SmallCategory: '스킬3', Desc: 'QA 목록 1', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '마법사', SmallCategory: '스킬3', Desc: 'QA 목록 2', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '마법사', SmallCategory: '스킬3', Desc: 'QA 목록 3', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '마법사', SmallCategory: '스킬3', Desc: 'QA 목록 4', Owner: 'goli81', Complete: 'false', expand: true },
        
        { LargeCategory: '밸런스', MediumCategory: '마법사', SmallCategory: '스킬1', Desc: 'QA 목록 1', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '마법사', SmallCategory: '스킬1', Desc: 'QA 목록 2', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '마법사', SmallCategory: '스킬1', Desc: 'QA 목록 3', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '마법사', SmallCategory: '스킬1', Desc: 'QA 목록 4', Owner: 'goli81', Complete: 'false', expand: true },

        //
        { LargeCategory: '밸런스', MediumCategory: '마법사', SmallCategory: '스탯1', Desc: 'QA 목록 1', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '마법사', SmallCategory: '스탯1', Desc: 'QA 목록 2', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '마법사', SmallCategory: '스탯1', Desc: 'QA 목록 3', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '마법사', SmallCategory: '스탯1', Desc: 'QA 목록 4', Owner: 'goli81', Complete: 'false', expand: true },

        { LargeCategory: '밸런스', MediumCategory: '마법사', SmallCategory: '스탯2', Desc: 'QA 목록 1', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '마법사', SmallCategory: '스탯2', Desc: 'QA 목록 2', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '마법사', SmallCategory: '스탯2', Desc: 'QA 목록 3', Owner: 'goli81', Complete: 'false', expand: true },
        { LargeCategory: '밸런스', MediumCategory: '마법사', SmallCategory: '스탯2', Desc: 'QA 목록 4', Owner: 'goli81', Complete: 'false', expand: true },
    ];

    var i = 0
    for (i = 0; i < rows.length; i++) {
        rows[i].id = i;
        rows[i].parentId = null
    }

    let treeMap = new Map()
    for (i = 0; i < rows.length; i++) {
        var key = rows[i].LargeCategory + "/" + rows[i].MediumCategory + "/" + rows[i].SmallCategory
        var keyId = treeMap.get(key)
        if (keyId === undefined) {
            treeMap.set(key, rows[i].id)
            
        } else {
            rows[i].parentId = keyId
        }
    }
    return rows;
}

export function GetColumnsResize() {
    var columns = [
        {
            columnName: 'LargeCategory',
            width: 100
        },
        {
            columnName: 'MediumCategory',
            width: 100
        },
        {
            columnName: 'SmallCategory',
            width: 100
        },
        {
            columnName: 'Desc',
            width: 200
        },
        {
            columnName: 'Complete',
            width: 100
        },
        {
            columnName: 'Owner',
            width: 100
        },
        {
            columnName: 'Action',
            width: 100
        }
    ];

    return columns;
}

export function GetBooleanColumns() {
    var columns = ['Complete']
    return columns;
}