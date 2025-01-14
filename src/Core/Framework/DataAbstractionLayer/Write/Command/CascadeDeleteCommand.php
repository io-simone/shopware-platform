<?php declare(strict_types=1);

namespace Shopware\Core\Framework\DataAbstractionLayer\Write\Command;

/**
 * @final
 *
 * @package core
 */
class CascadeDeleteCommand extends DeleteCommand
{
    public function isValid(): bool
    {
        // prevent execution
        return false;
    }

    public function getPrivilege(): ?string
    {
        return null;
    }
}
