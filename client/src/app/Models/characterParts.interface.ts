export interface characterPart {
    id?: number;
    image: string;
    bodypartId: number;
    collection?: string; 
  }

// collection can be "SANS", "Mii"

//  0 = head
//  1 = left arm
//  2 = torso
//  3 = right arm
//  4 = left leg
//  5 = right leg

export const characterPartsList: characterPart[] = [
    {
        "image": "../assets/Heads/TemplateHead.png",
        "bodypartId": 0,
        "collection": "Template"
    },
    {
        "image": "../assets/Torsos/TemplateTorso.png",
        "bodypartId": 2,
        "collection": "Template"
    },
    {
        "image": "../assets/Left_Arms/TemplateArm.png",
        "bodypartId": 1,
        "collection": "Template"
    },
    {
        "image": "../assets/Right_Arms/TemplateArm.png",
        "bodypartId": 3,
        "collection": "Template"
    },
    {
        "image": "../assets/Left_Legs/TemplateLeg.png",
        "bodypartId": 4,
        "collection": "Template"
    },
    {
        "image": "../assets/Right_Legs/TemplateLeg.png",
        "bodypartId": 5,
        "collection": "Template"
    },
    {
        "image": "../assets/Heads/SansHead.png",
        "bodypartId": 0,
        "collection": "Template"
    },
]