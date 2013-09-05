Title: change permission recursively to folders only
Date: 2010-03-23 17:58
Author: Andrea Zonca
Tags: linux
Slug: change-permission-recursively-to

<code>
 find . -type d -exec chmod 777 {} \;
</code>