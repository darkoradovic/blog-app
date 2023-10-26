export interface MenuItem {
    id : string;
    label :string;
    path : string;
}

export interface Option {
    label : string;
    value : string;
}

export interface FormControlItem{
    id: string;
    label: string;
    placeholder: string;
    type: string;
    component: string;
    options: Option[]
}

export interface BlogFormData {
    title : string;
    description : string;
    image : string;
    category : string;
}

export interface Blog{
    id : number;
    title : string;
    description : string;
    category : string;
    userId : string;
    userImage : string;
    comments : Comment[];
    image : string;
}

export interface Comment{
    id: number
    content: string
    author: string
    postId: string
}