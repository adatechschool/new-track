- pouvoir ajouter un skills
- simplifier et faire un back en avance \
  CRUD themes / skills

themes :
{
id : pfk
name : text
}

skills :
{
description : text
status : {
validated : boolean,
learning : boolean,
not_started : boolean
}
theme_id : integer fk
}
