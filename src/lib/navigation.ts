
import { sidebarItems } from "@/src/components/layout/global/sidebar-items";

export function flattenNavigation(
    items: typeof sidebarItems
): Array<{ title: string; url: string }> {
    const result: Array<{ title: string; url: string }> = [];

    function traverse(items: any[]) {
        for (const item of items) {
        if ("url" in item) {
            result.push({ title: item.title, url: item.url });
        } else if ("items" in item && Array.isArray(item.items)) {
            traverse(item.items);
        }
        }
    }

    traverse(items);
    return result;
}

export function getNextPage(
    currentUrl: string,
    navigation: Array<{ title: string; url: string }>
) {
    const currentIndex = navigation.findIndex((page) => page.url === currentUrl);

    if (currentIndex === -1 || currentIndex === navigation.length - 1) {
        return null;
    }

    return navigation[currentIndex + 1];
}

export function getPreviousPage(
    currentUrl: string,
    navigation: Array<{ title: string; url: string }>
) {
    const currentIndex = navigation.findIndex((page) => page.url === currentUrl);

    if (currentIndex === -1 || currentIndex === 0) {
        return null;
    }

    return navigation[currentIndex - 1];
}
